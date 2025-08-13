import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import styles from './copy-button.styles.js';

/**
 * Add a description here
 *
 * @tag my-copy-button
 * @since 0.0.0
 * @status experimental
 *
 **/
export class MyCopyButton extends LitElement {
  static override styles = styles;

  @property() 
  heading = 'Hello, word!';

  override render() {
    return html`
      <h1>${this.heading}</h1>
    `;
  }
}

export default MyCopyButton;
