class LanguageStore {
    constructor() {
        this.currentLang = 'pl'; // Always start with Polish
        this.subscribers = new Set();
    }

    getCurrentLanguage() {
        return this.currentLang;
    }

    setLanguage(lang) {
        this.currentLang = lang;
        this.notifySubscribers();
    }

    subscribe(callback) {
        this.subscribers.add(callback);
        return () => this.subscribers.delete(callback);
    }

    notifySubscribers() {
        this.subscribers.forEach(callback => callback(this.currentLang));
    }
}

export const languageStore = new LanguageStore();