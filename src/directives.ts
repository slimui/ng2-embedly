// Import all directives
import {Ng2EmbedlyComponent} from "./directives/ng2-embedly.component";
import {Ng2EmbedlyDirective} from "./directives/ng2-embedly.directive";

// Export all directives
export * from './directives/ng2-embedly.component';
export * from './directives/ng2-embedly.directive';

// Export convenience property
export const DIRECTIVES: any[] = [
  Ng2EmbedlyComponent,
  Ng2EmbedlyDirective
];
