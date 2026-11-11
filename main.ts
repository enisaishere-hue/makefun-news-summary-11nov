// news-summary-01 entry (Node 22, standard library only): copies the
// summary in summary.txt beside this file to /output/entry.txt.
// The copy is byte-for-byte and deterministic: no network, no clock,
// no randomness, so both grader runs write identical files.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./summary.txt', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.txt'));
