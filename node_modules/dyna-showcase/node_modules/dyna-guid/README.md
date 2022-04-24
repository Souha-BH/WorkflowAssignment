# About

A simple guid generator.

**The chance to get the same guid is one in 18,446,744,073,709,600,000 on the same millisecond in the same timezone!**

Also the starting first block is the random one and this helps the binary search to find the guid with much less iterations.

# Samples

1g6263bg-1h2c3a89-18046497750547120

1f8900gh-1cg4e90g-54886797750547120

1hf0d670-20h58e2d-38130897750547120

# Comparison with .net guid

dyna guid: 1db35ac3-1fd43hh2-25211997750547120

.net guid: 30dd879c-ee2f-11db-8314-0800200c9a66

The difference is that dyna guid is 
- hard to generate the same on the same millisecond per timezone _and_
- impossible to generate the same on next millisecond

# Usage

```
import {guid} from "dyna-guid";

console.log('guid', guid());
console.log('even stronger guid', guid(3));
  
```  

# Method

## function guid(blocks: number = 2): string

Block is a set of 8 chars separated with dashes.

If you need even more complex guids (!why?) you can increase the number of blocks. Or for shorter set it to 1.

