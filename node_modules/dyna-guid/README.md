# dyna guid V2

A simple guid generator.

**The chance to get the same guid is one in 18,446,744,073,709,600,000 on the same millisecond in the same timezone!**

# Samples

139aca66-2024bc60-2f847b9701be62a163 // Fixed length: 36

12f5ade5-54356610-2f847b9702f0b91635

216f48d8-233eb6b0-2f847b970379de20d6

# Comparison with others

```
dyna guid v2: 1e955ef4-47939014-2f847b9700c03a2a3b

dyna guid v1: 1g6263bg-1h2c3a89-18046497750547120

   .net guid: 30dd879c-ee2f-11db-8314-0800200c9a66
```

The difference is that dyna guid is 
- hard to generate the same on the same millisecond per timezone _and_
- impossible to generate the same on next millisecond!

# dyna guid syntax

```
<random block>-<random block>-<timestamp>
```

The default of the random blocks is 2, would be 1 or any other number.

# Usage

```
import {guid} from "dyna-guid";

console.log('guid', guid());
console.log('even stronger guid', guid(3));
  
```  

# Method

## function guid(randomBlocks: number = 2): string

Block is a set of 8 chars separated with dashes.

If you need even more complex guids (!why?) you can increase the number of blocks. Or for shorter set it to 1.

# Change log

## V1 05-Aug-2017

Sample: 1g6263bg-1h2c3a89-18046497750547120

## V2 20-Jan-2022

Sample: 18ee7d36-14d00ef3-2f847b9703c45725c7

- Fixed size, doesn't change cause current date
- Better random blocks