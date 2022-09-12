import { createMachine, assign } from 'xstate';

export const bookingMachine = createMachine({
  predictableActionArguments: true,
  id: 'buy plane tickets',
  initial: 'initial',
  states: {
    initial: {
      on: {
        START: 'search'
      }
    },
    search: {
      on: {
        CONTIUNE: 'passengers',
        CANCEL: 'initial'
      }
    },
    passengers: {
      on: {
        DONE: 'tickets',
        CANCEL: 'initial'
      }
    },
    tickets: {
      on: {
        FINISH: 'initial'
      }
    },
  }
})