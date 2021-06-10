import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FerryTerminalComponent } from "./ferryterminal.component";

describe("FerryterminalComponent", () => {
  let component: FerryTerminalComponent;
  let fixture: ComponentFixture<FerryTerminalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FerryTerminalComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FerryTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
