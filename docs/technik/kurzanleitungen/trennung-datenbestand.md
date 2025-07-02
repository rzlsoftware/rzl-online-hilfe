## Trennung eines RZL Datenbestandes

Die Trennung eines RZL Datenbestandes auf zwei oder mehrere Datenbestände erfolgt in zwei Schritten:

1. **Lokales Duplizieren des gesamten RZL-Datenbestandes**
2. **Je Datenbestand die Klienten/Daten löschen, die nicht zu diesem Datenbestand gehören**

### 1. Lokales Duplizieren des gesamten RZL-Datenbestandes

Verwenden Sie hierzu am besten die **RZL Komplettsicherung**. Gehen Sie dabei wie im [Setup-Handbuch Daten sichern)](#) beschrieben vor, um eine komplette Sicherung des aktuellen Datenbestandes durchzuführen.

> **Achtung:** Während dieses Vorgangs ist es nicht möglich, mit den RZL-Programmen zu arbeiten.  
> Am Ende der Sicherung werden Sie gefragt, ob Sie die Lizenz zurücklegen möchten. Diese Frage bitte mit **Nein** beantworten, um die Installation weiterhin verwenden zu können.

Die Komplettsicherung kann danach in einer getrennten RZL Installation wiederhergestellt werden. Dabei kann es sich gleich um die Installation handeln, bei der dann letztendlich mit dem Teildatenbestand weitergearbeitet wird.

> **Achtung:** Es müssen zunächst sämtliche Daten auf diesem System wiederhergestellt werden, um danach erst die nicht gewünschten Klienten/Daten zu löschen.  
> Gibt es bestimmte Klienten/Daten, die auf keinen Fall (auch nicht temporär) zum neuen System übertragen werden dürfen, ist es notwendig, eine temporäre zweite RZL Installation im eigenen System zu erstellen. Diese wird dazu verwendet, um die betroffenen Klienten/Daten zu löschen.  
> Wenden Sie sich hierzu an unseren RZL Vertrieb, damit Ihnen eine temporäre Lizenz für die zweite Installation zur Verfügung gestellt werden kann.

Für die Wiederherstellung der Komplettsicherung in einer zweiten Installation gehen Sie wie im [Setup-Handbuch (Kapitel 10)](#) beschrieben vor.

### 2. Klienten/Daten löschen

#### 2.1. Klienten löschen

Das Löschen der Klienten erfolgt in zwei Schritten:

a) **Klientendaten im KIS bereinigen**  
b) **Klienten in der ZMV löschen**

> Je mehr Klienten Sie gleichzeitig bereinigen/löschen (möglich durch Mehrfachauswahl), desto länger dauert der Vorgang.

##### a) Klientendaten im KIS bereinigen

- Öffnen Sie im KIS den Menüpunkt `KIS` → `Klient bereinigen`.
- In der nachfolgenden Maske wählen Sie den Bereich der Klienten aus, den Sie löschen möchten.
- Markieren Sie alle Optionen und klicken Sie auf **Bereinigen**.

##### b) Klienten in ZMV löschen

- Öffnen Sie die ZMV und wählen Sie im Menü `Klient/Löschen …`.
- Klicken Sie auf die Schaltfläche **Erweitert**.
- Im Feld **Nummer** können Sie Nummernbereiche eingeben (z. B. `1-599`).
- Nach Drücken der Tabulatortaste wird die Liste nach diesen Klienten gefiltert.
- Klicken Sie auf **Alle markieren** und anschließend auf **Löschen**.
- Im nachfolgenden Dialog klicken Sie auf **Ja, alle**.

> **Achtung:** Sollten Klienten mit Passwörtern geschützt sein, müssen Sie diese beim Löschen der Klienten eingeben.

#### 2.2. Mitarbeiter löschen

- Öffnen Sie das RZL Board Modul **STAMM**.
- In der Mitarbeiterliste wählen Sie den jeweiligen Mitarbeiter aus (öffnen).
- Links oben befindet sich die Schaltfläche **Mitarbeiter löschen**.

##### Dahinterliegende Person löschen

- Unter **Personen und Firmen** können Sie die jeweilige Person öffnen und löschen.
