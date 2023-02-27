import { TestBed } from '@angular/core/testing';

import { TasksTaskService } from './task.service';

describe('TasksTaskService', () => {
  let service: TasksTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TasksTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
