# angular-jcf-module 
Use JCF - JavaScript Custom Forms in angular projects. 

Both JCF and jQuery are included as dependencies.

## Installation
Install using npm 
`npm install angular-jcf-module`

Install using yarm
`yarn add angular-jcf-module`

## Importing into an angular CLI project
Add JCF and Jquery to the `.angular-cli-json` file:
```JSON
"styles": [
        "styles.css":[
        "../node_modules/jcf/dist/css/theme-minimal/jcf.css"
      ],
      "scripts": [
        "../node_modules/jquery/dist/jquery.slim.min.js",
        "../node_modules/jcf/js/jcf.js"
      ]
```
Add additional jcf modules as needed to the scripts array.

For non CLI projects add the required script tags to index.html. Please reference [JCF](https://github.com/w3co/jcf/blob/master/README.md) for more information.

Add the JcfModule to the `app.module.ts` imports array:
```
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Angular Modules
    BrowserModule,
    CommonModule,
    RouterModule,

    // Custom Modules
    JcfModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```

## Useage

Add `jcf` as an attribute the the html element you would like jcf to operate on:
`<input type="number" name="vehicle" value="" jcf>`

Additional JCF configuration please reference [JCF](https://github.com/w3co/jcf/blob/master/README.md) for more information.
