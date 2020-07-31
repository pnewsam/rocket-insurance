import { css } from "@emotion/core";

export default {
  nav: css`
     {
      background-color: var(--color__raisin-black);
      color: var(--color__white);
    }
  `,
  logo: css`
     {
      color: var(--color__white);
      font-size: 24px;
      font-style: italic;
      font-weight: 800;
      text-decoration: underline;
      text-decoration-color: var(--color__earth-yellow);
    }
  `,
  menu: css`
     {
      background-color: var(--color__raisin-black);
    }
  `,
  link: css`
     {
      color: var(--color__white);
      &:hover {
        color: var(--color__earth-yellow);
      }
    }
  `,
};
