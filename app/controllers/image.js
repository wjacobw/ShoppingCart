import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ImageController extends Controller {
  @tracked isZoomed = false;

  @action
  toggleZoom() {
    this.isZoomed = !this.isZoomed;
  }
}
