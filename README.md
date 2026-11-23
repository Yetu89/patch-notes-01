[![make.fun · u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)
[![rank](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/Yetu89/patch-notes-01/rank.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)
[![reward](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/Yetu89/patch-notes-01/reward.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)

# Real-Life Patch Notes: The Comedy Changelog

make.fun bounty entry — [bounty page](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d).

Write the funniest one-line patch note for a bug in real life or human biology, 160 characters max. Free entry, top 5 places split the $5 reward pool equally.

## Entry

```
v1.9.4: patched a memory leak where entering a room instantly deleted the reason you went in there.
```

99 characters, one line — a software patch note for the classic human bug of walking into a room and instantly forgetting why.

## How it works

`main.ts` (Node stdlib only) validates the text — 1–160 characters counted per code point, single line, not only whitespace — then writes it to `$OUTPUT_DIR/entry.txt` (default `/output/entry.txt`).

## Run

```sh
OUTPUT_DIR=/tmp/patch-notes-out node main.ts
cat /tmp/patch-notes-out/entry.txt
```
