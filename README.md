# tinyTemplateRender
tiny template renderer to render myself defined template like {{KEY}}, please dont care about the performance..

BISICALLY, FOR MY PERSONALL USAGE

API example: 
```
 tplRender(template:string)(data:object)=>string;
 
 const resultStr = tplRender(MY_TEMPLATE_STR)(MY_DATA); 
```

the template string would always looks like 

```
 the variable {{VAR_NAME}} = {{OBJ.DATA.KEY_PROPERTY}} || {{your_name}};
```

and the data in the example would be:

```json
{
  "VAR_NAME": "foo",
  "OBJ.DATA.KEY_PROPERTY": "bar",
  "your_name": "dva"
}
```

that`s it;
