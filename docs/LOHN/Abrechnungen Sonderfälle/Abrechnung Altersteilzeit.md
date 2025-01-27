# Abrechnung Altersteilzeit

Die durch das AMS geförderte Altersteilzeit ermöglicht es, ältere Dienstnehmer mit einer verringerten Arbeitszeit bis zum Pensionsantritt zu beschäftigen. Für diesen gleitenden Übergang in die Pension, ist die Zustimmung des Arbeitgebers erforderlich. Der Arbeitnehmer verliert weder Pensionsbezüge, Anspruch auf Krankengeld, Abfertigung oder Ansprüche der Arbeitslosenversicherung.

## Anlage der Lohnarten

Für die Abrechnung der Altersteilzeit sind folgenden Lohnarten nötig:

| Lohnart                | Sozialversicherung | Lohnsteuer | DB-Pflichtigkeit | KommSt-Pflichtig. |
| ---------------------- | :----------------: | :--------: | :--------------: | :---------------: |
| Lohnausgleich AMS lfd. |         1          |     1      |        1         |         1         |
| Lohnausgleich AMS SZ   |         2          |     2      |        1         |         1         |
| Erhöhung BMGL ATZ lfd. |         5          |     0      |        0         |         0         |
| Erhöhung BMGL ATZ SZ   |         6          |     0      |        0         |         0         |

!!! info "Tipp"
    Die Lohnarten *Lohnausgleich AMS lfd.* und *Erhöhung der BGML lfd.* sollten als wiederkehrende freie Lohnarten definiert sein. ![Image](<img/image514.png>)

!!! info "Tipp"
    Die Lohnarten vom Lohnausgleich werden als laufender/SZ pflichtiger Bezug betrachtet und können somit auch mit dem Altersteilzeitentgelt über das Feld *Lohn/Gehalt* bzw. *Sonderzahlung* abgerechnet werden.

!!! warning "Hinweis"
    Die Altersteilzeitlohnarten können auch für die Abrechnung der Teilpension verwendet werden.

## Umverteilung SV

Die Basis für die SV-Beiträge während der Altersteilzeit ist der Bezug des Dienstnehmers **VOR** der Altersteilzeit, wobei es hier allerdings für die Differenz zwischen dem Bezug vor Altersteilzeit und den Bezügen während der Altersteilzeit zu einer Umverteilung der SV-Anteile kommt.

Von der Differenz *Bezug vor Altersteilzeit - (lfd. Bezug + Lohnausgleich)* trägt der Dienstnehmer lediglich die Anteile die auf *KU und WF* entfallen (1% der BMGL). Der Rest muss vom Dienstgeber getragen werden, um den Lohnausgleich durch das AMS in Anspruch nehmen zu können.

Die übernommenen SV Anteile des Dienstgebers werden bei den Auswertungen als SV-AGA dargestellt.

Damit diese Umverteilung korrekt erfolgt, muss der ermittelte Differenzbetrag bei der Lohnart *Erhöhung BGML ATZ lfd.* (SV Pflichtigkeit Nr. 5) eingetragen werden.

## DB/DZ und KommSt.

Die vom Dienstgeber übernommenen SV Anteile stellen seit 01.01.2024 KEINEN Vorteil aus dem Dienstverhältnis mehr dar. Daher fällt bei den Erhöhungslohnarten keine DB, DZ und KommSt-Pflicht an.

!!! info "Tipp"
    Bei der Abrechnung einer Sonderzahlung erfolgt die Aufteilung der Sonderzahlungsbezüge ident zu den laufenden Bezügen.

## Darstellung in der Abrechnung

Im Bereich der fixen Lohnarten tragen Sie im Feld *Lohn/Gehalt* den Bezug während der Altersteilzeit ein. Anschließend füllen Sie die Lohnart *Lohnausgleich AMS lfd.*, mit dem Betrag des Lohnausgleiches vom AMS, sowie die *Lohnart Erhöhung BGML ATZ lfd.* mit dem Differenzbetrag 
zwischen Bezug vor und während der Altersteilzeit.

**Beispiel:**

Bezug vor Altersteilzeit: EUR 3.000,00

Bezug während Altersteilzeit (Herabsetzung auf 50%): EUR 1.500,00

Lohnausgleich AMS: EUR 750,00

**Ansicht Bildschirm fixe Lohnarten**

![Image](<img/image515.png>){width="500"}

**Ansicht Bildschirm freie Lohnarten**

![Image](<img/image516.png>){width="500"}

**Ansicht der Abrechnung**

![Image](<img/image517.png>){width="500"}

Der Dienstnehmeranteil setzt sich daher aus EUR 2.250,00 x 18,12 % + EUR 750,00 x 1 % = EUR 415,20 zusammen.

Die restlichen 17,12 % der Erhöhungslohnart EUR 750,00 x 17,12 % = EUR 128,40 müssen vom Dienstgeber getragen werden, daher SV-AGA.

Diese EUR 128,40 erhöhen die BMGL DB/DZ/KommSt. Die Gesamt-BMGL für DB/DZ und Kommst beträgt daher in diesem Beispiel EUR 2.250,00 (lfd. Bezug + Lohnausgleich) + EUR 128,40 (17,12 % der Erhöhungslohnart) = EUR 2.378,40.