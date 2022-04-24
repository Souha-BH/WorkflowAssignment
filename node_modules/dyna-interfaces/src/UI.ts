export interface IDynaLabel {
  // object used for ui labels, where the content of it is used also for translations
  text?: string;            // the text will be applied if the tk not found (as default text)
  tk?: string;              // the translation key
  values?: {                // values are used inside the translated text (obtained by the tk)
    [key: string]: string | number;
  };
}
