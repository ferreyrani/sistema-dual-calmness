import { Component, OnInit,  ViewEncapsulation  } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CalendarioPage implements OnInit {
  taskName = "";
  taskList = [];
  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  addTask() {
    if (this.taskName.length > 0) {
        let task = this.taskName;
        this.taskList.push(task);
        this.taskName = "";
    }
}
deleteTask(index){
  this.taskList.splice(index, 1);
}
async updateTask(index) {
  const alert = await this.alertCtrl.create({
    cssClass: 'my-custom-class',
    header: 'Update Task?',
    message: 'Type in your new task to update.',
    inputs: [{ name: 'editTask', placeholder: 'Task' }],
      buttons: [{ text: 'Cancel', role: 'cancel' },
                { text: 'Update', handler: data => {
                    this.taskList[index] = data.editTask; }
                }]
  });

  await alert.present();

  const { role } = await alert.onDidDismiss();
  console.log('onDidDismiss resolved with role', role);
}

}

