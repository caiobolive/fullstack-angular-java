import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

export type CustomersDeleteConfirmDialogData = {
  name: string;
};

@Component({
  selector: 'app-customers-delete-confirm-dialog',
  imports: [MatDialogModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h2 mat-dialog-title>Excluir cliente?</h2>
    <mat-dialog-content>
      <p class="mat-body-medium dialog-body">
        Tem certeza de que deseja excluir <strong>{{ data.name }}</strong>? Esta ação não pode ser desfeita.
      </p>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button type="button" mat-dialog-close>Cancelar</button>
      <button mat-flat-button type="button" color="warn" [mat-dialog-close]="true">Excluir</button>
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
export class CustomersDeleteConfirmDialogComponent {
  readonly data = inject<CustomersDeleteConfirmDialogData>(MAT_DIALOG_DATA);
}
