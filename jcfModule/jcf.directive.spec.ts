import { DebugElement, Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { JcfDirective } from './jcf.directive';
import * as jcf from 'jcf';


@Component({
  template: `
    <input type="number" name="vehicle" value="" jcf> 
  `
})
class TestComponent {}

describe('JcfDirective', () => {

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let el: DebugElement;
  beforeEach(() => {

    spyOn(jcf, 'replace').and.callFake(
      () => { console.log('replace called'); }
    );

    spyOn(jcf, 'refresh').and.callFake(
      () => { console.log('refresh called'); }
    );

    spyOn(jcf, 'destroy').and.callFake(
      () => { console.log('destroy called'); }
    );

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

  it('should create the jcf element on init of directive', () => {
    let directive = new JcfDirective(el.nativeElement);
    directive.ngOnInit();

    expect(jcf.replace).toHaveBeenCalled();
  });

  it('should refresh element on value change', () => {
    const input = el.query(By.directive(JcfDirective)).nativeElement;
    input.value = 4;
    input.dispatchEvent(new Event('change'));

    expect(jcf.refresh).toHaveBeenCalled();
  });

  it('should destroy jcf element on directive destroy', () => {
    fixture.destroy();

    expect(jcf.destroy).toHaveBeenCalled();
  });

})