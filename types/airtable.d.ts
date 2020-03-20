export type FooterResult = {
  id: string;

  fields: { Name: string; Notes: string };
  save: () => void;
  patchUpdate: () => void;
  putUpdate: () => void;
  destroy: () => void;
  fetch: () => void;
  updateFields: () => void;
  replaceFields: () => void;
};

export type TeamResult = {
  id: string;
  fields: { ID: String; Attachments?: { id: string; url: string }[]; Name: string; Notes: string };
  save: () => void;
  patchUpdate: () => void;
  putUpdate: () => void;
  destroy: () => void;
  fetch: () => void;
  updateFields: () => void;
  replaceFields: () => void;
};
