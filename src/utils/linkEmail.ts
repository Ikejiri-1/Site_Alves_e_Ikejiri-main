export const emailLink = (email: string, subject: string, body: string): string => {
  const encodedSubject = encodeURIComponent(subject.trim());
  const encodedBody = encodeURIComponent(body.trim());

  return `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;
};