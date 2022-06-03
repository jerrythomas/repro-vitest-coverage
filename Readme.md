# Coverage report

Why does the coverage report list uncovered lines even when the change after firing event is being validated?

```text
 √ spec/ProgressDots.spec.js (1)

Test Files  1 passed (1)
     Tests  1 passed (1)
      Time  2.01s (in thread 20ms, 10034.36%)

-----------------------|---------|----------|---------|---------|-------------------
File                   | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-----------------------|---------|----------|---------|---------|-------------------
All files              |     100 |     62.5 |     100 |     100 |
 spec                  |     100 |      100 |     100 |     100 |
  ProgressDots.spec.js |     100 |      100 |     100 |     100 |
 src                   |     100 |       25 |     100 |     100 |
  ProgressDots.svelte  |     100 |       25 |     100 |     100 | 25-28
-----------------------|---------|----------|---------|---------|-------------------

```
