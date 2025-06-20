import { Component, QueryList, ViewChildren } from '@angular/core';
import { QuestionComponent } from '../question/question.component';
interface QuestionItem {
  id: number;
  text: string;
}

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css'],
})
export class QuestionnaireComponent {
  questions: string[] = [
    'What is your name?',
    'What is your favorite language?',
    'What is your goal in learning Angular?',
  ];

  newQuestions: QuestionItem[] = [
    { id: 1, text: 'What is your name?' },
    { id: 2, text: 'What is your favorite language?' },
  ];
  @ViewChildren(QuestionComponent)
  questionComponents!: QueryList<QuestionComponent>;

  newQuestion: string = '';
  nextId = 3;

  allAnswered: boolean = false;
  checked: boolean = false;

  checkAnswers() {
    this.checked = true;
    this.allAnswered = this.questionComponents
      .toArray()
      .every((q) => q.isAnswered());
  }

  ngAfterViewInit() {
    // Optionally subscribe to .changes for dynamic updates
    this.questionComponents.changes.subscribe(() => {
      console.log(
        'Question components changed:',
        this.questionComponents.length
      );
    });
  }

  addQuestion() {
    console.log('Questions: ', this.newQuestions);
    console.log('New Question:', this.newQuestion);
    if (this.newQuestion.trim()) {
      this.newQuestions.push({
        id: this.nextId++,
        text: this.newQuestion.trim(),
      });
      this.newQuestion = '';
    }
    console.log('nextId:', this.nextId);
  }

  removeQuestion(index: number) {
    this.newQuestions.splice(index, 1);
  }
}
