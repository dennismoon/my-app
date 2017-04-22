import { Injectable } from '@angular/core';

export class MyInfo {
  firstName: string;
  lastName: string;
  billRate: number;
  allocation: number;
}

export class TextAnswer {
  question: string;
  answerText: string;
}

export class DollarAnswer {
  question: string;
  dollarValue: number;
  answerText: string;
}

export class PercentAnswer {
  question: string;
  percentValue: number;
  answerText: string;
}

export class ExpenseAnswer {
  question: string;
  percentValue: number;
  dollarValue: number;
  answerText: string;
}

export class OptionAnswer {
  question: string;
  value: number;
  weight: number;
  answerText: string;
}

export class AnalysisViewModel {
  constructor(
    public firstName: TextAnswer,
    public lastName: TextAnswer,
    public billRate: DollarAnswer,
    public allocation: PercentAnswer
  ) {}
}

@Injectable()
export class AppStateService {

  private myInfo: MyInfo = new MyInfo;
  redirectUrl;

  constructor() { }

  getMyInfo() {
    return Object.assign({}, this.myInfo);
  }

  setMyInfo(myInfo) {
    this.myInfo = Object.assign({}, this.myInfo, myInfo);
  }
}
