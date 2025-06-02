Mit der Programmversion 2.25.6 haben Sie künftig die Möglichkeit Rollen bzw. einzelne Berechtigungen in den jeweiligen Rollen auf Dokumentbereiche einzuschränken. Um diese Funktion nutzen zu können, benötigen Sie zum RZL KIS & Board Basis Programm mindestens das Modul RZL KIS Dokumentenverwaltung (bzw. das Modul RZL Dokumentenverwaltung plus) und essentiell für die Nutzung das [Modul RZL Berechtigungssystem Premium](https://neu.rzlsoftware.at/steuerberater/kanzleiorganisation/rzl-berechtigungssystem-premium).

## Rolle auf Dokumentbereiche einschränken

Wollen Sie eine Rolle auf einen oder mehrere Dokumentbereiche einschränken, können Sie das im RZL Board unter *Stamm / Berechtigungen / Rollen* durchführen. Markieren Sie in der Liste die gewünschte Rolle und fügen Sie eine Rolleneinschränkung hinzu.

!!! warning "Hinweis"
    Einschränkungen auf Dokumentbereiche ist nur für Rollen vorgesehen, welche Berechtigungen in Bezug auf die Dokumente besitzen, wie z.B. die Rollen Geldwäscheprävention, Finanzbuchhaltung und Kanzleitätigkeiten usw.

![Einschränkung hinzufügen](<img/hinzufügen.png>)

Die Einschränkung auf Dokumentbereiche bietet zwei Möglichkeiten:

- das **Erlauben** von Dokumentbereichen für die Rolle
- das **Verbieten** von Dokumentbereichen für die Rolle

Der Unterschied zwischen Erlauben und Verbieten ist der, dass Dokumente in einem *erlaubten* Dokumentbereich für den Mitarbeiter **sichtbar** und in einem *verbotenen* Dokumentbereich **nicht sichtbar** sind.

Wird die Option Erlauben verwendet, spiegelt sich das in den Icons bzw. den Checkboxen wider. Beim Wählen der zu erlaubenden Dokumentbereiche wird ein grünes Hakerl zur Kennzeichnung verwendet.

![Einschränkung auf DB erlauben](<img/dokumentbereiche erlauben.png>){width="640"}

Außerdem werden unter *Rolleneinschränkungen* die erlaubten Dokumentbereiche mit ![grünes Dokument](<img/grünes Dokument.png>) gekennzeichnet. Wohingegen verbotene Dokumentbereiche mit ![rotes Dokument](<img/rotes Dokument.png>) gekennzeichnet werden.

Auf eine Rolle kann nicht ein Dokumentbereich erlaubt und ein anderer wiederum verboten werden. Entweder die Option Erlauben **ODER** Verbieten wird ganzheitlich verwendet.


## Mitarbeiter auf Dokumentbereiche einschränken

Sie können Dokumentbereiche auch für einzelne Mitarbeiter unterschiedlich einschränken. Einschränkungen auf Dokumentenbereiche auf Mitarbeiterebene sind entweder unter *Stamm / Berechtigungen / Rollen* oder direkt in den Mitarbeiterstammdaten unter *Berechtigungen / Rollenzuordnungen / Rollenzuordnungen bearbeiten* möglich.

Beim Einschränken des Mitarbeiters auf Dokumentenbereiche können die Dokumentbereich-Einschränkungen noch individueller vergeben werden.

**Szenario 1:** Für die Rolle Geldwäscheprävention wurde eine Rolleneinschränkung auf den Dokumentbereich Geldwäscheprävention (Erlauben) getätigt und die Mitarbeiter 26, 30 und 32 zugeordnet. Der Mitarbeiter Nr. 35 soll der Rolle zugeordnet werden. Mit einer Ausnahme: auch der Dokumentbereich WiEReG soll für diesen Mitarbeiter erlaubt werden.

![Rolle Geldwäsche](<img/Rolle mit Erlauben.png>)

Sie klicken im Ribbon im Bereich Mitarbeiterzuordnungen auf *Hinzufügen* und wählen den gewünschten Mitarbeiter Nr. 35 + Klientengruppe aus. Im nächsten Schritt wählen Sie auch den Dokumentbereich WiEReG aus.

![Zuordnung WiEReG DB zu Mitarbeiter](<img/zuordnung db mitarbeiter.png>)

!!! warning "Hinweis"
    Wurde eine Rolle bereits mit Erlauben eingeschränkt, können jegliche weitere Einschränkungen nur noch mit Erlauben getätigt werden. *Keine Einschränkung* und *Ausgewählte Dokumentbereiche verbieten* ist aus diesem Grund im oberen Dialog ausgegraut.


**Szenario 2:** Die Rolle Kanzleiverwaltung *ohne* Rolleneinschränkung, also ohne Einschränkung auf Dokumentbereiche soll bestehen bleiben. Die Rolle soll aber dem Mitarbeiter Nr. 2 zugeordnet werden, welcher eine Dokumentenbereich Einschränkung bekommen soll.
Die Zuordnung und Einschränkung muss direkt in den Mitarbeiterstammdaten erfolgen.

![Einschränkung DB auf Mitarbeiter](<img/Einschränkung DB MA.png>)

Die Auswahlmöglichkeiten *Keine Einschränkung, Ausgewählte Dokumentbereiche erlauben und Ausgewählte Dokumentbereiche verbieten* sind hier frei wählbar, da die zu vergebende Rolle keine Rolleneinschränkung besitzt. Der Rolle wird die Einschränkung auf Mitarbeiterebene vergeben.

Würden Sie dieselbe Rolle auch einem anderen Mitarbeiter geben, können ganz neue Einschränkungen getätigt werden. Es ist hier dann auch möglich ein *erlauben* zu vergeben, obwohl bei einem anderen Mitarbeiter ein *verbieten* vergeben wurde.

Sie beschließen der Rolle eine allgemein geltende Rolleneinschränkung zu vergeben, obwohl bereits Einschränkungen auf Mitarbeiterebene getätigt wurden:

* Der Mitarbeiter wird mit **verbieten** auf einen Dokumentbereich eingeschränkt. Die Rolleneinschränkung kann durchgeführt werden, jedoch nur mit der Option **Verbieten**.
![Ansicht Rolleneinschränkung vergeben](<img/Rolle einschränken obwohl MA vorher eingeschränkt.png>)
  Es muss nicht zwingend der auf den Mitarbeiter eingeschränkte Dokumentbereich verwendet werden. 
  Wird im Nachhinein aber eine Rolleneinschränkung festgelegt, wird dies automatisch für den Mitarbeiter hinterlegt.
  
!!! warning "Hinweis"
    Rolleneinschränkungen überwiegen stets Einschränkung für Mitarbeiter!

  Beispiel: Zuerst wurde **auf Mitarbeiterebene** die Rolle Kanzleiverwaltung zugeordnet mit der Einschränkung auf den Dokumentbereich Lohn- und Gehaltsverrechnung (verbieten). Die Rolle selbst hat **keine** Rolleneinschränkung. Im Nachhinein wird der Rolle eine Rolleneinschränkung auf den Dokumentbereich Finanzbuchhaltung zugewiesen (verbieten). Automatisch hat der Mitarbeiter jetzt auch die Einschränkung auf den Dokumentbereich Finanzbuchhaltung (verbieten).
   
!!! info "Tipp"
    Finanzbuchhaltung = Rolleneinschränkung
    
    Lohn- und Gehaltsverrechnung = Einschränkung auf Dokumentbereich auf Mitarbeiterebene


* Die Rolle wurde auf Mitarbeiterebene mit **erlauben** und **verbieten** eingeschränkt. Eine allgemeine Rolleneinschränkung kann nicht durchgeführt werden. Folgender Hinweis erscheint:

![Hinweis Rolleneinschränkung bei vorhandener untersch. MA-Einschränkung](<img/Fehler Rolleneinschränkung untersch. MA.png>)


## Auf Dokumentbereiche übergreifend festlegen

Um schnell und einfach mehrere Rollen auf Dokumentbereiche einschränken zu können, gibt es die übergreifende Funktion. Hier werden nur Rollen angezeigt, welche auf Dokumentbereich(e) einschränkbare Funktionen beinhalten.

![DB übergreifend festlegen](<img/auf DB übergreifend festlegen.png>)

Die Rollen, welche im linken Bereich angezeigt werden, werden in *Keine Einschränkung, Erlauben* und *Verbieten* unterteilt.
Ist eine Rolle bereits durch *verbieten* auf Dokumentbereiche eingeschränkt, kann dies mit Klick auf *Erlauben* (oder *Keine Einschränkung*) geändert werden. Die Checkboxen wechseln dann mit Änderung der Option *Verbieten* von ![Verbieten Kreuz](<img/Kreuzal.png>) auf das Symbol für *Erlauben* ![erlauben Hakerl](<img/Hakerl.png>)

Für eine Rolle, welche bereits Rolleneinschränkungen auf Dokumentbereiche **und** auf Mitarbeiterebene führt oder **nur** auf Mitarbeiterebene, kann die Option nicht geändert werden.

Die Spalte *Rolle* lässt sich sortieren und die Optionen können jeweils eingeklappt werden. Sie können mehrere Checkboxen markieren und mit der Leertaste wählen oder leeren.

![mehrere Checkboxen markieren](<img/mehrere markieren.png>)

## Übersicht Dokumentbereich Einschränkungen

Sie haben die Möglichkeit sich eine Übersicht der Rolleneinschränkungen und Einschränkungen auf Mitarbeiterebene pro Dokumentbereich anzeigen zu lassen.

![Übersicht DB Einschränkungen](<img/Übersicht Dokumentbereicheinschränkungen.png>)

## Digitaler Personalakt

### In Ihrer Kanzlei wird bereits das [RZL LOHN Modul Digitaler Personalakt](https://neu.rzlsoftware.at/steuerberater/personalverrechnung) verwendet.

 Mit der Programmversion 2.25.6 werden die Einschränkungen automatisch aus Ihren vorigen Einstellungen migriert. Hier kommt es darauf an, aufgrund welcher Optionen die Sichtbarkeit auf Lohn-/Dienstnehmer-Dokumente gewählt wurde.

![Einstellungen MA-Stammdaten Sichtbarkeit Lohn](<img/MAStammdaten Einstellungen.png>)

#### Migration aufgrund Zuständigkeitsbereich für LOHN

In den Mitarbeiterstammdaten ist die Sichtbarkeit Lohn-/Dienstnehmer-Dokumente aufgrund Zuständigkeitsbereich für LOHN hinterlegt. Im Kanzlei-Informations-System wurde im Zuständigkeitsbereich das Programm LOHN aktiviert und außerdem sind die Klienten für den Zuständigkeitsbereich hinterlegt.

Zuständigkeitsbereich:
![Zuständigkeitsbereich Verwaltung](<img/Zuständigkeitsbereich Verwaltung.png>)
Zuordnungen Zuständigkeiten:
![Zuständigkeiten KIS](<img/Zuständigkeiten KIS.png>)

Die Migration erfolgt in folgenden Schritten:

* eine neue Klientengruppe wird erstellt (Personalakt-Klienten von ...)
     * wird einem Mitarbeiter im KIS unter Zuständigkeitsbereich LOHN alle Klienten zugeordnet, wird keine neue Klientengruppe erstellt, sondern es wird durch *Alle Klienten* ersetzt
* dem Mitarbeiter wird die Rolle *Lohnverrechnung* mit dieser neu angelegten Klientengruppe (oder *Alle Klienten*) zugeordnet
    * besitzt der Mitarbeiter bereits die Rolle Lohnverrechnung, wird diese mit der neuen Klientengruppe ergänzt

Es erfolgt **keine** Änderung, wenn der Mitarbeiter bereits die Rolle Lohnverrechnung mit der Klientengruppe *Alle Klienten* besitzt.

!!! info "Tipp"
    Zur Bereinigung der neu erstellten Klientengruppen durch die Migration, verwenden Sie gerne die Funktion *Klientengruppen Ersetzen* oder *Duplikate zusammenführen*. In der Kurzanleitung [Berechtigungssystem](https://hilfe.rzlsoftware.at/Board/Kurzanleitungen/Berechtigungssystem/#tipps-zur-bereinigung) ist dies detailliert beschrieben.


#### Migration aufgrund Berechtigung 'Dokumente anzeigen'

In den Mitarbeiterstammdaten ist die Sichtbarkeit Lohn-/Dienstnehmer-Dokumente aufgrund 'Dokumente anzeigen' hinterlegt. Außerdem besitzt der Mitarbeiter bereits eine Rolle, welche die Funktion 'Dokument anzeigen' beinhaltet. (z.B. Lohnverrechnung, Kanzleitätigkeiten, ...)

![Rollenzuordnung und Einstellung](<img/Rolle und Dokumente anzeigen.png>)

Die Migration erfolgt in folgenden Schritten:

* der Mitarbeiter besitzt keine Rolle mit der Funktion 'Dokumente anzeigen'
    * die Rolle Lohnverrechnung wird hinzugefügt
* der Mitarbeiter besitzt mindestens eine Rolle mit der Funktion 'Dokumente anzeigen' für *Alle Klienten*  
     * die Rolle Lohnverrechnung für *Alle Klienten* wird hinzugefügt
* der Mitarbeiter besitzt mindestens eine Rolle mit der Funktion 'Dokumente anzeigen' für eine bestimmte Klientengruppe  
    * die Rolle Lohnverrechnung wird für jene bestimmte Klientengruppe hinzugefügt


Es erfolgt **keine** Änderung, wenn der Mitarbeiter bereits die Rolle Lohnverrechnung mit der Klientengruppe *Alle Klienten* besitzt.

!!! warning "Hinweis"
    Wurden bereits Einschränkungen auf Dokumentbereiche durchgeführt und erst dann der digitale Personalakt aktiviert, beachten Sie bitte folgendes:
    Bei bereits existierenden Einschränkungen auf Dokumentbereiche können **keine** neuen Einschränkungen gesetzt werden. Die Sichtbarkeit auf den Dokumentbereich Lohn- und Gehaltsverrechnung ist dementsprechend manuell zu kontrollieren und gegebenenfalls abzuändern.


### In Ihrer Kanzlei wird das [RZL LOHN Modul Digitaler Personalakt](https://neu.rzlsoftware.at/steuerberater/personalverrechnung) noch nicht verwendet.

Aktivieren können Sie den digitalen Personalakt in der Web Oberfläche des RZL Dienstes. Hierzu verweise ich Sie auf das Setup Handbuch.
Sie benötigen zum Aktivieren die Rolle *Benutzerverwaltung* oder *Alle Berechtigungen* bzw. eine Rolle mit den Funktionen *Rolle verwalten* und *Mitarbeiter verwalten*.

Wird der digitale Personalakt aktiviert, werden alle Rollen  auf den Dokumentbereich Lohn- und Gehaltsverrechnung eingeschränkt.

* außer die Rolle *Alle Berechtigungen* und *FinanzOnline Übermittlung*
* für die Rolle Lohnverrechnung wird der Dokumentbereich Lohn- und Gehaltsverrechnung **erlaubt**
* für alle anderen Rollen wird der Dokumentbereich Lohn- und Gehaltsverrechnung **verboten**

Jegliche Änderungen werden selbstverständlich im Protokoll detailliert erfasst. Das Protokoll können Sie unter *Stamm / Berechtigungen / Protokoll* öffnen.

![Protokoll Eintrag](<img/Beispiel Protokoll.png>)

### Sonstige Änderungen

In den Mitarbeiterstammdaten im RZL Board fällt die Drop-Down Einstellung *Sichtbarkeit Lohn-/Dienstnehmer-Dokumente* komplett weg. Diese Einstellung wird nicht mehr benötigt, da das Sichtbarkeitsrecht für den Dokumentbereich Lohn- und Gehaltsverrechnung über die Rolleneinschränkungen geregelt wird. 

![Ma-Stammtdaten DropDown Feld weg](<img/Zuständigkeitensbereich anlegen alt_neu.png>)

In der Verwaltung der Zuständigkeitsbereiche im Kanzlei-Informations-System können keine Einstellungen mehr betreffend der Klassik Programme getroffen werden. Das wird mit den Rollen und Klientengruppen im RZL Board definiert.

![Zuständigkeitsbereich Klassik Programme KIS](<img/Einstellungen MA-Stammdaten neu.png>)
