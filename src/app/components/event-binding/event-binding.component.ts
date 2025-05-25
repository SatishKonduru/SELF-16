import { Component } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatRadioChange } from '@angular/material/radio';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css'],
})
export class EventBindingComponent {
  name = '';
  result = '';
  inputValue = '';
  selectedValue = '';
  isChecked = false;
  selectedGender = '';
  keyUpValue = '';
  keyDownValue = '';
  keyEnterValue = '';
  focusValue = '';
  mouseStatusValue = '';
  contextValue = '';
  dragStatus = 'Not started';
  scrollStatus = '';
  getName() {
    this.name = 'Satish';
  }
  clear() {
    this.name = '';
  }
  onDoubleClick() {
    this.result = 'You double clicked the button';
  }
  // onInput(event: Event) {
  //   const value = (event.target as HTMLInputElement).value;
  //   this.inputValue = value;
  // }
  onInput = (value: any) => (this.inputValue = value);

  // onChange(event: MatSelectChange) {
  //   this.selectedValue = event.value;
  // }

  onChange = (event: MatSelectChange) => (this.selectedValue = event.value);
  onCheckboxChange(event: MatCheckboxChange) {
    this.isChecked = event.checked;
  }
  onGenderChange(event: MatRadioChange) {
    this.selectedGender = event.value;
  }
  onKeyup(event: KeyboardEvent) {
    this.keyUpValue = event.key;
  }
  onKeydown(event: KeyboardEvent) {
    this.keyDownValue = event.key;
  }
  onEnterKey() {
    this.keyEnterValue = 'Enter key pressed';
  }
  // onFocus() {
  //   this.focusValue = 'Input focused';
  // }

  onFocus = () => (this.focusValue = 'Input got Focused');
  onBlur() {
    this.focusValue = ' Input lost focus';
  }
  onMouseOver() {
    console.log('Mouse over');
  }
  onMouseEnter() {
    console.log('Mouse enter');
  }
  onMouseLeave() {
    console.log('Mouse leave');
  }
  onRightClick = (event: MouseEvent) => {
    event.preventDefault(); //to avoid opening right-click window
    this.contextValue = 'Right click';
  };
  onDragStart = (event: DragEvent) => {
    this.dragStatus = 'Dragging started...';
    // Set the ID of the dragged element
    event.dataTransfer?.setData('text/plain', 'dragItem');
  };

  onDragOver = (event: DragEvent) => {
    event.preventDefault(); // Important to allow dropping
    this.dragStatus = 'Over the drop zone!';
  };

  onDrop = (event: DragEvent) => {
    event.preventDefault();
    const draggedElementId = event.dataTransfer?.getData('text/plain');
    const draggedElement = document.getElementById(draggedElementId!);
    const dropZone = document.getElementById('dropZone');

    if (draggedElementId && dropZone) {
      dropZone.appendChild(draggedElement);
      this.dragStatus = 'Dropped and moved successfully!';
    } else {
      this.dragStatus = 'Dropped Fail!';
    }
  };
  onScroll(event: Event) {
    this.scrollStatus = 'You Scrolled';
  }
}
