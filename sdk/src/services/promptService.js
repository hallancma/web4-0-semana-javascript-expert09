export class PromptService {
  #messages = [];
  #session = null;
  async init(initialPromts) {
    if (!window.LanguageModel) return;

    this.#messages.push({
      role: 'system',
      content: initialPromts,
    });

    return this.#createSession();
  }

  async #createSession() {
    this.#session = await LanguageModel.create({
      initialPromts: this.#messages,
      expectedInputLanguages: ['pt'],
    });

    return this.#session;
  }
  //teste
  prompt(text, signal) {
    this.#messages.push({
      role: 'user',
      content: text,
    });

    return this.#session.promptStreaming(this.#messages, {
      signal,
    });
  }
}
