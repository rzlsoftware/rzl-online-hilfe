# Bankverbindung

### Einstellungen in der Bankverbindung
In der Bankverbindung steht der zusätzliche Tab **Überweisungen** zur Verfügung. Hier werden die grundlegenden Einstellungen für den Zahlungsverkehr festgelegt.

![alt text](image-17.png)

**Grundoptionen**

Es stehen folgende Optionen zur Auswahl:

- Keine Überweisungen
- Überweisungen

Die Option ***1 Überweisung*** wird bei der Übernahme aus FIBU Klassik automatisch gesetzt, wenn:

- im Zahlungsverkehr ein Pfad hinterlegt ist oder
- in der Bankverbindung **EBICS-Portal** für Überweisung aktiviert ist.

!!! warning "Hinweis"

    Nur Bankverbindungen mit aktivierten Überweisungen können im Überweisungslauf verwendet und bei Kreditoren zur Auswahl angeboten werden.

***2 Überweisungen an Kreditoren als Sammellastschrift abbuchen***

- aktiviert: Abbuchung als Gesamtsumme vom eigenen Bankkonto
- deaktiviert: einzelne Abbuchung pro Kreditor

***3 Überweisungen verbuchen***

Erzeugt eine Splitbuchung mit Zwischenkonto als Sammelkonto. Das Zwischenkonto muss ein Zahlungsmittelkonto sein.