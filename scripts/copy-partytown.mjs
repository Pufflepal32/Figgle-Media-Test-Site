// Copies Partytown's browser runtime into dist/~partytown/ so the bootstrap
// script in index.html (`<script src="/~partytown/partytown.js">`) can find it.
//
// Partytown ships its files under node_modules/@builder.io/partytown/lib/.
// We don't put them in public/ because they're regenerated per-install and
// shouldn't live in source control.

import { copyLibFiles } from '@builder.io/partytown/utils';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DEST = join(__dirname, '..', 'dist', '~partytown');

await copyLibFiles(DEST);
console.log(`[partytown] runtime copied to ${DEST}`);
