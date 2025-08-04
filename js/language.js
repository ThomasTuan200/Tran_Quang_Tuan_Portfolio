function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        {pagelanguage: 'en',
        defaultLanguage: 'en',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        includedLanguages: 'vi',
        autoDisplay: false,
        multilanguagePage: true},
        'google_translate_element'
    );
}