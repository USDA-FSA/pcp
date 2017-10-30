@bignamehere,

While the multi-tiered nested example you're attempting will be a good use case to make available at some point, don't kill yourself to get that working for now. Concentrate on the flat use case.

Solidify the below use case, and then create a **new issue** (referencing this issue) that addresses a multi-tiered example set for a future milestone.

**Nothing is selected**

```
[ ] Select all
[ ] Apple Pie
[ ] Cherry Pie
[ ] Peach Pie
```

**Checking "Cherry Pie" results in indeterminate "Select all"...**

```
[-] Select all
[ ] Apple Pie
[x] Cherry Pie
[ ] Peach Pie
```

**Checking "Select all" when in indeterminate state will *uncheck* all**

```
[ ] Select all
[ ] Apple Pie
[ ] Cherry Pie
[ ] Peach Pie
```

**Checking "Select all" when *none* are checked**

```
[x] Select all
[x] Apple Pie
[x] Cherry Pie
[x] Peach Pie
```

**Unchecking "Cherry Pie" when *all* are checked results in *indeterminate* "Select all"**

```
[-] Select all
[x] Apple Pie
[ ] Cherry Pie
[x] Peach Pie
```
