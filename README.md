# Angular Atomic UI
A custom Angular component library built using [Atomic Design](https://atomicdesign.bradfrost.com/) methodologies
and published as a scoped [npm package](https://docs.npmjs.com/).

## Install

`npm install @sethlittleford/ng-ui`

## Import

Import component modules into application's AppModule, usually `app.module.ts`
For example:

```typescript
//...
import { NavbarModule } from '@sethlittleford/ng-ui';

@NgModule({
  //...
  imports: [
    //..
    NavbarModule
  ],
  //...
})
export class AppModule { }
```

### Fonts & Icons

This library uses [Google's Material Icons](https://material.io/resources/icons/?style=baseline) and the [Lato](https://fonts.google.com/specimen/Lato) font.

Add the following HTML into the `<head>` element of `src/index.html`

```html
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Material+Icons&display=swap" 
    rel="stylesheet">
```

### Themes

This library comes packaged with pre-built themes that can be applied to the components.
Theme styles are generated statically at build-time and can be imported into an application from `@sethlittleford/ng-ui/themes`.
Only one css theme file is needed in an application.

Simply add one line into `src/styles.css`

```css
@import '@sethlittleford/ng-ui/themes/dark.css';
```

> Note: When building with the Angular CLI, you must configure the `angular.json` to include all external style files, see [docs](https://angular.io/guide/component-styles#external-and-global-style-files).
Register global style files in the `styles` section which, by default, is pre-configured with the global `styles.css` file.

## Usage
