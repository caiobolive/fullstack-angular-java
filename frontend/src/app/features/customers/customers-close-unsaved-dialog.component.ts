import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-customers-close-unsaved-dialog',
  imports: [MatDialogModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h2 mat-dialog-title>Fechar sem salvar?</h2>
    <mat-dialog-content>
      <p class="mat-body-medium dialog-body">
        Existem alterações que ainda não foram guardadas. Se fechar o painel agora, essas alterações serão
        descartadas.
      </p>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button type="button" mat-dialog-close>Voltar</button>
      <button mat-flat-button type="button" color="warn" [mat-dialog-close]="true">Fechar sem salvar</button>
    </mat-dialog-actions>
  `,
  styles: [
    `
      .dialog-body {
        margin: 0;
        max-width: 26rem;
        line-height: 1.5;
        color: var(--mat-sys-on-surface-variant);
      }
    `
  ]
})
export class CustomersCloseUnsavedDialogComponent {}
