export class Theme {
  contentColor: string;
  
  // pre-built theme chosen by library user
  private chosenTheme: string;
  
  // pre-built themes ng-ui supports
  private themeList: string[] = ['dark', 'light'];
  
  // primary, accent, or warn
  preset: string;
  
  constructor(presetChoice: string) {
    this.preset = presetChoice;
    this.chosenTheme = this.determinePreBuiltTheme();
    this.setColorsFromTheme(this.chosenTheme);
  }
  
  private determinePreBuiltTheme(): string {
    try {
      for(let i = 0; i < document.styleSheets.length; i++) {
        let sheet = document.styleSheets[i];
        if(sheet instanceof CSSStyleSheet) {
          if(sheet.href == null || !sheet.href.includes('https://fonts.googleapis')) {
          for(let j = 0; j < sheet.cssRules.length; j++) {
            let rule = sheet.cssRules[j];
            if(rule instanceof CSSStyleRule && rule.selectorText.match(':root')) {
              for(let theme of this.themeList) {
                // Ensure theme name is declared as first CSSStyleDeclaration in :root
                if(rule.style.item(0).match('--' + theme + 'Theme')) {
                  return theme;
                }
              }
            } 
          }
        }
      }
    }
  } catch(error) {
    console.log(error);
  }
}

private setColorsFromTheme(theme: string): void {
  switch (theme) {
    case 'dark':
    this.setDarkPresets(this.preset);
    break;
    
    default:
    break;
  }
}

private setDarkPresets(preset: string): void {
  switch (preset) {
    case 'primary':
      this.contentColor = 'var(--teal)';
    break;
    
    case 'accent':
      this.contentColor = 'var(--purple)';
    break;

    case 'warn':
      this.contentColor = 'var(--maroon)';
    break;
  }
  
}

}