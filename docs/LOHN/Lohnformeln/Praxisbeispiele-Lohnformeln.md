# Praxisbeispiele für Lohnformeln

Lohnformeln ermöglichen es, wiederkehrende Berechnungen in der Lohnverrechnung automatisch durchzuführen. Damit können beispielsweise Sonderzahlungen berechnet oder Entgeltbestandteile für Ausfallszeiten ermittelt werden.

Auf dieser Seite zeigen wir anhand mehrerer Praxisbeispiele, wie solche Lohnformeln aufgebaut sein können. Dabei steht nicht die technische Schreibweise der Formel im Vordergrund, sondern die Frage:

> **Was soll berechnet werden und wie kommt das Ergebnis zustande?**

Die Beispiele sollen dabei helfen, die einzelnen Bestandteile einer Lohnformel leichter nachzuvollziehen und eigene Formeln nach demselben Prinzip aufzubauen.

!!! warning "Wichtig"
    **Lohnformeln müssen immer individuell geprüft und eingerichtet werden.**

    Die Berechnung von Sonderzahlungen und Ausfallsentgelten hängt insbesondere vom anzuwendenden **Kollektivvertrag**, den betrieblichen Gegebenheiten und der **individuellen Verwendung der freien Lohnarten** ab.

    Daher gibt es keine pauschale Lohnformel, die für alle Klienten und Abrechnungsfälle gleichermaßen verwendet werden kann. Die jeweilige Lohnformel muss an die Anforderungen des Klienten und dessen konkrete Lohnverrechnung angepasst und entsprechend angelegt werden.

    Die folgenden Beispiele dienen daher ausschließlich dazu, den grundsätzlichen Aufbau und die Funktionsweise von Lohnformeln zu veranschaulichen.

## Praxisbeispiel: Sonderzahlung

Sonderzahlungen wie Urlaubszuschuss oder Weihnachtsremuneration stehen nicht immer für ein vollständiges Kalenderjahr zu. Tritt ein Dienstnehmer beispielsweise erst während des Jahres ein oder scheidet vor Jahresende aus, kann die Sonderzahlung entsprechend aliquotiert werden.

Mit einer Lohnformel kann eine solche Berechnung automatisiert werden.

### Die Lohnformel

`Lohnart(2002).Wert(0) / ZR().TageKalenderjahr * ZR().TageSZ`

Auf den ersten Blick sieht die Formel vielleicht etwas technisch aus. Zerlegen wir sie daher Schritt für Schritt.

**Ganz einfach erklärt:**

| Lohnformelteil          | Erklärung                                                                                                                     |
| :---------------------- | :---------------------------------------------------------------------------------------------------------------------------- |
| `Lohnart(2002).Wert(0)` | Nimmt den aktuellen Wert der Lohnart 2002. Es handelt sich bei der Lohnart 2002 um die nicht aliquotierte Lohn-/Gehaltssumme. |
| `ZR().TageKalenderjahr` | Teilt diesen Betrag durch die Anzahl der Tage des Kalenderjahres. Dadurch wird ein Betrag pro Kalendertag ermittelt.          |
| `ZR().TageSZ`           | Multipliziert den Tagesbetrag mit der Anzahl jener Tage, für die ein Anspruch auf die Sonderzahlung besteht.                  |

**Kurz gesagt:**

Gesamtbetrag ÷ Kalendertage × Anspruchstage = (aliquote) Sonderzahlung

### Beispiel

Ein Mitarbeiter hat ein monatliches Gehalt von EUR 3.000,00.
Er tritt am **1. Juli** in das Unternehmen ein und hat daher im laufenden Jahr nur für **184 Tage** Anspruch auf die Sonderzahlung.

Die Formel rechnet:

EUR 3.000,00 ÷ 365 Tage × 184 Tage = EUR 1.512,33

Die aliquote Sonderzahlung beträgt in diesem Beispiel somit EUR 1.512,33.

!!! warning "Hinweis"
    Welche Bemessungsgrundlage für eine Sonderzahlung heranzuziehen ist und wie die Aliquotierung erfolgen muss, hängt unter anderem vom jeweiligen Kollektivvertrag und vom konkreten Abrechnungsfall ab. Auch die verwendete Lohnart kann je nach Einrichtung der Lohnverrechnung abweichen.

## Praxisbeispiel: Ausfallsentgelt pro Arbeitstag

Mit einer Lohnformel kann auch ein durchschnittliches Ausfallsentgelt pro Arbeitstag ermittelt werden. Im folgenden Beispiel werden dafür eine Erschwerniszulage und berücksichtigte Überstunden aus den letzten drei Monaten herangezogen.

### Die Lohnformel

`(Lohnart(1013).Durchschnitt(-3:-1)+Üst_Alle(1).Durchschnitt(-3:-1))/(ZR().TageProWoche(0)*4,33)`

Auch diese Formel lässt sich in einzelne Bestandteile zerlegen.

**Ganz einfach erklärt:**

| Lohnformelteil                      | Erklärung                                                                                                                             |
| :---------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| `Lohnart(1013).Durchschnitt(-3:-1)` | Bildet den Durchschnitt der Lohnart 1013 aus den letzten drei Monaten. Es handelt sich bei der Lohnart 1013 um die Erschwerniszulage. |
| `Üst_Alle(1).Durchschnitt(-3:-1)`   | Ermittelt zusätzlich den Durchschnitt der berücksichtigten Überstunden aus den letzten drei Monaten.                                  |
| `ZR().TageProWoche(0) * 4,33`       | Rechnet die Arbeitstage pro Woche auf durchschnittliche Arbeitstage pro Monat hoch.                                                   |

**Kurz gesagt:**

(Erschwerniszulage + Überstunden) ÷ (Arbeitstage pro Woche × 4,33) = Ausfallsentgelt pro Arbeitstag

### Beispiel

Angenommen, ein Mitarbeiter hatte in den letzten drei Monaten durchschnittlich:

- EUR 300,00 Erschwerniszulage
- EUR 150,00 Überstunden
- 5 Arbeitstage pro Woche

Dann rechnet die Formel:

(EUR 300,00 + EUR 150,00) ÷ (5 Tage × 4,33)

EUR 450,00 ÷ 21,65 Tage = EUR 20,79

Das Ausfallsentgelt beträgt in diesem Beispiel somit EUR 20,79 pro Arbeitstag.

!!! warning "Hinweis"
    Welche Entgeltbestandteile in die Berechnung eines Ausfallsentgelts einzubeziehen sind und welcher Durchschnittszeitraum anzuwenden ist, richtet sich nach den jeweiligen arbeitsrechtlichen und kollektivvertraglichen Vorgaben. Die hier verwendeten Lohnarten sind daher nur als Beispiel zu verstehen.

## Praxisbeispiel: Ausfallsentgelt pro Stunde

Nach demselben Prinzip kann ein Ausfallsentgelt auch auf eine einzelne Arbeitsstunde heruntergerechnet werden. Statt der Arbeitstage pro Woche werden dafür die vereinbarten Wochenstunden verwendet.

### Die Lohnformel

`(Lohnart(1013).Durchschnitt(-3:-1)+Üst_Alle(1).Durchschnitt(-3:-1))/(ZR().WochenStd(0)*4,33)`

Auf den ersten Blick sieht die Formel vielleicht etwas technisch aus. Zerlegen wir sie daher Schritt für Schritt.

**Ganz einfach erklärt:**

| Lohnformelteil                      | Erklärung                                                                                                                             |
| :---------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| `Lohnart(1013).Durchschnitt(-3:-1)` | Bildet den Durchschnitt der Lohnart 1013 aus den letzten drei Monaten. Es handelt sich bei der Lohnart 1013 um die Erschwerniszulage. |
| `Üst_Alle(1).Durchschnitt(-3:-1)`   | Ermittelt zusätzlich den Durchschnitt der berücksichtigten Überstunden aus den letzten drei Monaten.                                  |
| `ZR().WochenStd(0) * 4,33`          | Rechnet die vereinbarten Wochenstunden auf durchschnittliche Monatsstunden hoch.                                                      |

**Kurz gesagt:**

(Erschwerniszulage + Überstunden) ÷ (Wochenstunden × 4,33) = Ausfallsentgelt pro Stunde

### Beispiel

Angenommen, ein Mitarbeiter hatte in den letzten drei Monaten durchschnittlich:

- EUR 300,00 Erschwerniszulage
- EUR 150,00 Überstunden
- 38,5 Wochenstunden

Dann rechnet die Formel:

(EUR 300,00 + EUR 150,00) ÷ (38,5 Stunden × 4,33)

EUR 450,00 ÷ 166,71 Stunden = EUR 2,70

Das Ausfallsentgelt beträgt in diesem Beispiel somit EUR 2,70 pro Stunde.

!!! warning "Hinweis"
    Auch bei der Berechnung eines Ausfallsentgelts pro Stunde können die einzubeziehenden Lohnarten, der Betrachtungszeitraum und die Berechnungsgrundlage je nach Kollektivvertrag und individueller Lohnverrechnung unterschiedlich sein.

## Was ist bei eigenen Lohnformeln zu beachten?

Die gezeigten Beispiele können als Ausgangspunkt für eigene Lohnformeln dienen. Sie sollten jedoch nicht ungeprüft auf andere Klienten oder Abrechnungsfälle übertragen werden.

Vor der Anlage einer Lohnformel sollte insbesondere geprüft werden:

- Welcher **Kollektivvertrag** ist anzuwenden?
- Welche Entgeltbestandteile müssen in die Berechnung einbezogen werden?
- Welcher **Betrachtungs- bzw. Durchschnittszeitraum** ist maßgeblich?
- Welche Lohnarten werden beim jeweiligen Klienten für die benötigten Werte verwendet?
- Werden **freie Lohnarten** individuell verwendet oder anders belegt als in den gezeigten Beispielen?
- Erfolgt die Berechnung nach Tagen, Stunden oder einer anderen Berechnungsgrundlage?
- Gibt es beim Klienten besondere betriebliche oder abrechnungstechnische Anforderungen?

!!! info "Tipp"
    Eine Lohnformel sollte immer so aufgebaut werden, dass sie die konkrete Lohnverrechnung des jeweiligen Klienten abbildet. Entscheidend ist daher nicht nur die Formel selbst, sondern auch, welche Werte und Lohnarten beim Klienten tatsächlich hinter den verwendeten Formelbestandteilen stehen.