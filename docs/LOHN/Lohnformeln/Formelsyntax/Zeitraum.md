# Zeitraum

![Image](<img/image415.png>){width="500"}


![Image](<img/image416.png>){width="500"}


![Image](<img/image417.png>){width="500"}


![Image](<img/image418.png>){width="500"}


![Image](<img/image419.png>){width="500"}


![Image](<img/image420.png>){width="500"}


## Formelsyntax

ZR().SVTage(Monat|Jahr) Brutto,...

## Zugriff auf Werte

**ZR().SVTage(Monat|Jahr)**

- Liefert die SV-Tage ohne SV-Tage einer Kündigungsentschädigung und Urlaubsersatzleistung

- Bei einem Wiedereintritt im selben Monat werden die SVTage aufsummiert

**ZR().SVTageKÜ(Monat|Jahr)**

- Liefert die SV-Tage, die durch die KÜ entstehen

- Immer Zugriff auf den laufenden Monat - ZR().SVTageKÜ(0)

**ZR().SVTageUE(Monat|Jahr)**

- Liefert die SV-Tage die durch die UE entstehen

- Immer Zugriff auf den laufenden Monat - ZR().SVTageUE(0)

**ZR().LStTage(Monat|Jahr)**

- Liefert die LStTage

- Bei einem Wiedereintritt im selben Monat werden die LStTage aufsummiert

**ZR().AktuellesMonat**

- Liefert den Monat der aktuellen Abrechnung

**ZR().AnzahlAbrechnungen(Monat|Jahr)**

- Liefert die Anzahl der Abrechnungen zum Überprüfen, ob in einem Monat eine Abrechnung durchgeführt worden ist.

- Liefert für ein Monat entweder 0 - Monat wurde nicht abgerechnet

- oder 1 - Monat wurde abgerechnet (auch bei einem Wiedereintritt) z.B.: ZR().AnzahlAbrechnungen(1:12)

**ZR().TageSZ**

- Liefert die Tage für die SZ-Berechnung: Kalendertage vom letzten Eintrittsdatum bzw. Jahresanfang bis zum Austrittsdatum bzw. Jahresende.

**ZR().TageKÜ(Monat|Jahr)**

- Liefert die eingegebenen Kalendertage (Dat. Von – Dat. Bis) bei der KÜ

**ZR().TageUE(Monat|Jahr)**

- Liefert die eingegebenen Tage bei der UE

**ZR().TageUrlaub(Monat|Jahr)**

- Liefert die Urlaubstage aus der Urlaubskartei inkl. Feiertage.

**ZR().TageUrlaubOhneFeiertage(Monat|Jahr)**

- Liefert die Urlaubstage aus der Urlaubskartei ohne Feiertage.

**ZR().TageUrlaubSaldo**

- Liefert den Urlaubssaldo lt. Urlaubskartei.

**ZR().ZAEndsaldoArbeitsstunden**

- Liefert den Zeitausgleichssaldo aus der Zeitausgleichskartei nach Arbeitsstunden.

**ZR().ZAEndsaldoStundenRueckstellung**

- Liefert den Zeitausgleichssaldo aus der Zeitausgleichskartei nach Stunden Rückstellung.

**ZR().Arbeitstage(Monat|Jahr)**

- Liefert die Arbeitstage lt. Eingabe im Eintrittsbildschirm.

**ZR().TageKalenderjahr**

- Liefert die Tage vom Kalenderjahr.

**ZR().TageKrank()**

- Liefert die Krankenstandstage aus der Krankenstandskartei inkl. Feiertage.

**ZR().TageKrankOhneFeiertage()**

- Liefert die Krankenstandstage aus der Krankenstandskartei ohne Feiertage.

**ZR().TageEFZ(Monat|Jahr)**

- Liefert die Krankenstandstage aus der Krankenstandskartei des eingegebenen Monats.

**ZR().TageEFZ100(Monat|Jahr)**

- Liefert die Krankenstandstage mit 100%iger Entgeltfortzahlung lt. Krankenstandskartei.

**ZR().Feiertage(Monat|Jahr)**

- Liefert die Feiertage lt. Feiertagskalender.

**ZR().WochenStd(Monat|Jahr)**

- Liefert die Wochenstunden lt. Eingabe im Eintrittsbildschirm.

**ZR().TageProWoche(Monat|Jahr)**

- Liefert die Tage pro Woche lt. Eingabe im Eintrittsbildschirm.

**ZR().TageEintritt**

- Liefert die Kalendertage seit Eintritt des Dienstnehmers.

**ZR().MonateEintritt**

- Liefert die Monate seit Eintritt des Dienstnehmers.

**ZR().JahreEintritt**

- Liefert die Jahre seit Eintritt des Dienstnehmers.

**ZR().TageUrlaubMonatSaldo(Monat|Jahr)**

- Liefert den Saldo der Urlaubskartei zum Monatsende.

**ZR().TageUEExakt(Monat|Jahr)**

- Liefert die Tage der Ersatzleistung (Urlaubsersatzleistung) lt. Eingabe im Ausrittsbildschirm.

**ZR().ZAArbeitsstunden(Monat|Jahr)**

- Liefert die Stunden lt. Eingabe in der Zeitausgleichskartei bei Einstellung Arbeitsstunden

**ZR().ZAStundenRueckstellung(Monat|Jahr)**

- Liefert die Stunden lt. Eingabe in der Zeitausgleichskartei bei Einstellung Stunden Rückstellung.

**ZR().ZASaldoArbeitsstunden(Monat|Jahr)**

- Liefert die Stunden lt. Eingabe in der Zeitausgleichskartei bei Einstellung Arbeitsstunden zum Monatsende.

**ZR().ZASaldoStundenRueckstellung(Monat|Jahr)**

- Liefert die Stunden lt. Eingabe in der Zeitausgleichskartei bei Einstellung Stunden Rückstellung zum Monatsende.