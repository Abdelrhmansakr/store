import {
  DisplayProcessor,
  SpecReporter,
<<<<<<< HEAD
  StacktraceOption
=======
  StacktraceOption,
>>>>>>> 358369b (init project)
} from 'jasmine-spec-reporter';
import JasmineStartedInfo = jasmine.JasmineStartedInfo;

class CustomProcessor extends DisplayProcessor {
  public displayJasmineStarted(info: JasmineStartedInfo, log: string): string {
    return `${log}`;
  }
}

jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(
  new SpecReporter({
    spec: {
<<<<<<< HEAD
      displayStacktrace: StacktraceOption.NONE
    },
    customProcessors: [CustomProcessor]
=======
      displayStacktrace: StacktraceOption.NONE,
    },
    customProcessors: [CustomProcessor],
>>>>>>> 358369b (init project)
  })
);
