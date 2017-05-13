import { DebugElement, Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { JcfDirective } from './jcf.directive';
import * as jQuery from 'jquery';
import * as jcf from 'jcf';


@Component({
  template: `
    <input type="checkbox" name="vehicle" value="Bike" jcf> 
  `
})
class TestComponent {}

beforeEach(() => {
  spyOn(jcf, 'replace');

  spyOn(jcf, 'refresh');

  spyOn(jcf, 'destroy');
})

describe('JcfDirective', () => {

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let el: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        JcfDirective,
        TestComponent
      ]
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
  });

  it('should be definded', () => {
    const directive = el.query(By.directive(JcfDirective));
    expect(directive).toBeDefined();
  });

  it('should replace input with jcf element', () => {
    const jcfClass = document.getElementsByClassName('jcf-checked')
    console.log(jcfClass);

    expect(jcfClass.length).toEqual(1);
  });

})