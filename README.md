# Js-Diff

##### A JavaScript library to calculate difference between two js variables(variables cab be number, string, Boolean, array or object)
--------

![recursive diff demo](./img/recursive-diff.png?raw=true "Sample Recursive Diff")

The api returns a standard diff object having key, value pair where each key represents a '/' separated path and each value represents a change object. Path denotes where the changes has been made against the original object and change denotes the nature of change ie: which operation(add/update/delete) has been performed and what is it's new value.

```
diff = {
	path : {'operation': 'add/update/delete', 'value' : 'NewValue'}  /* Value represent ChangedValue */
}
```

## Api details: 

**getDiff(ob1, ob2):** getDiff would take two arguments and return their diff.

**applyDiff (ob1, diff):** applyDiff would take two arguments: 1)original object, 2)diff object and applies diff object on original object and return the resulting object.
