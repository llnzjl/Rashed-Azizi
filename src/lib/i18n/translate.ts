export type Messages = Readonly<Record<string, string>>;

export function translate(
  messages: Messages,
  text: string,
  ...values: (string | number)[]
) {
  const message = Object.hasOwn(messages, text) ? messages[text] : text;
  return values.length
    ? message.replace(/\{(\d+)\}/g, (placeholder, index) =>
        String(values[Number(index)] ?? placeholder),
      )
    : message;
}
