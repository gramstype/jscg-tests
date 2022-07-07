# jscg-tests

## Purpose
Tests designed to find the level of accuracy of JavaScript call graphs as constructed by the closure compiler.

## Notation
The following notations are used to denote false positives and false negatives that can be expected for specific callsites in terms of the set of possible targets identified by the call graph. If the analysis is accurate, the call graph identifies the one and only correct target for a given callsite. 
- ***"+"*** represents a false positive. Example: a callsite that is resolved to more than one target. 
- ***"-"*** represents a false negative. Example: a callsite that is resolved a set of targets that does not contain the correct target that will be resolved during runtime.
- ***"o"*** is the negation of "+" and "-", thus representing a lack of false positive(s) and false negative(s), i.e., an accurate resolution.