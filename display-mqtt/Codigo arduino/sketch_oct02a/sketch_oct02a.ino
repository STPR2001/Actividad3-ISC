#include <LiquidCrystal.h>

LiquidCrystal lcd(7, 6, 5, 4, 3, 2); 
int ledPin = 8; 

void setup() {
  Serial.begin(9600);  
  lcd.begin(16, 2);   
  pinMode(ledPin, OUTPUT); 
}

void loop() {
  if (Serial.available() > 0) {
    String message = Serial.readString();  
    lcd.clear();
    lcd.print(message);  

   
    if (message == "LED_ON") {
      digitalWrite(ledPin, HIGH);  
    } else if (message == "LED_OFF") {
      digitalWrite(ledPin, LOW);   
    }
  }
}
