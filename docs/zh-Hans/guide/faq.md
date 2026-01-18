# 常见问题

## `MODULE_DEVICE_TABLE` 宏调用编译报错
出现该报错的原因是内核源码中的 `input handler` 已损坏，导致宏调用时参数类型校验、语法解析等环节无法正常执行。

跟随[文档](manual-hooks.md#input-hooks)内容对内核源码增加对应调用即可