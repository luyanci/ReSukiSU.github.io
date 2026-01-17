# FAQ

## Compilation error when invoking the  `MODULE_DEVICE_TABLE`  macro

The error occurs because the `input handler` **in the kernel source code** is corrupted, which prevents the parameter type verification and syntax parsing from executing normally during macro invocation.

Please add the corresponding calls to the kernel source code according to [the document](manual-hooks.md#input-hooks)