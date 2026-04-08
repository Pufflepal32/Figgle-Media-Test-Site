import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { trackEvent } from './usePageTracking';

interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
}

interface UseLeadFormReturn {
  formData: LeadFormData;
  setField: (field: keyof LeadFormData, value: string) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  isSubmitting: boolean;
  isSubmitted: boolean;
  error: string | null;
}

export function useLeadForm(source: string): UseLeadFormReturn {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const setField = (field: keyof LeadFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      if (!supabase) {
        throw new Error('Form service is not configured. Please try calling us directly.');
      }

      const { error: insertError } = await supabase.from('leads').insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company || null,
        source,
        page_url: window.location.pathname,
      });

      if (insertError) throw insertError;

      trackEvent('generate_lead', 'form', source);
      setIsSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return { formData, setField, handleSubmit, isSubmitting, isSubmitted, error };
}
