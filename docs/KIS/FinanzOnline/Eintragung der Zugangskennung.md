![FinOn Zugänge](<img/image125.png>)

## WebService FinanzOnline

Voraussetzung für das automatisierte Auslesen der Databox ist die Anlage eines [**WebService-Benutzers**](../FinanzOnline/Anlage%20eines%20WebService-Benutzers.md) angelegt ist. Mit diesem Zugang werden die in die
FinanzOnline Databox behördlich zugestellten Eingänge automatisch
ausgelesen und zugeordnet.

![Databox Synchronisation](<img/image126.png>)

Nach Anwahl des Eintrags *Neuer Zugang* sind die Zugangskennungen für
den im Finanz­Online angelegten WebService-Benutzer (Teilnehmer ID,
Benutzer ID und Passwort) einzugeben.

Im Bereich *Zuordnung* müssen Sie den Eintrag *WebService* anwählen. Der
Benutzer kann durch Anwahl des Felds *Aktiv* deaktiviert werden. Der
aktuellste Databox Eintrag wird mit Datum angezeigt.

Innerhalb von FinanzOnline sollten Sie im Bereich *Zustellung* die
Verständigung für Veranlagungsbescheide und die Übermittlung von
Buchungsmitteilungen aktivieren.

!!! warning "Hinweis"
    Für die Abfrage der Quoten wird seit der Umstellung seitens FinanzOnline ein WebService-Benutzer benötigt.


## WebService USP
Der WebSerive USP Benutzer wird für das automatisierte Auslesen der WiEReG-Meldungen bzw. das Abrufen von WiEReG-Auszügen benötigt. Die Anlage eines WebService Benutzer erfolgt innerhalb von USP. Damit Sie dies nutzen können, muss das Modul WiEReG lizenziert werden.

![USP WebService Zugang](<img/image180.png>)

Nach Anwahl des Eintrags *Neuer Zugang* sind die Zugangskennungen für den im USP angelegten WebService-Benutzer (Benutzer ID und Passwort) einzugeben.
Im Bereich Zuordnung müssen Sie den Eintrag **Web-Service USP** anwählen. Durch das aktivieren des Benutzers (Option Aktiv anwählen) können Sie diesen für das RZL verwenden.

## Exkurs: Anlage eines WebService-Benutzers

In der Administratorverwaltung des USP ist der Menüpunkt zu finden mit
dem WebServicekontos angelegt werden können. Das Anlegen funktioniert
ähnlich wie die Anlage von Benutzern mit dem Unterschied, dass keine
Personifizierung erforderlich ist.

![Anlage WebService im USP](<img/image181.png>)

Nachdem ein WebService-Konto angelegt wurde, kann man über den Menüpunkt
„WebService-Rechte verwalten“ die entsprechende Berechtigung vergeben.
Der WebService-Benutzer für das RZL KIS/Board benötigt folgende
Berechtigungen:

- WiEReG - WebService Datenabgleich: Zum Abruf von Auszügen und
  XML-Dateien

- WiEReG - Änderungsdienst: Zur Information über Änderungen bei den
  gemeldeten wirtschaftlichen Eigentümern ihrer Kunden

Eine ausführliche Dokumentation zur Anlage eines Webservicebenutzers
finden Sie in der Anwendungshilfe des BMF.


## Steuerkonto-, Erklärungen- und Vertretungslistenabfragen

Für die Steuerkontoabfrage, die Steuererklärungen und die Vertretungsliste wird kein Web-Service-Benutzer Zugang verwendet. Hier ist ein „normaler“ FinanzOnline-Zugang der Kanzlei einzutragen, d.h. ein Zugang der es ermöglicht ins FinanzOnline einzusteigen um Steuerkonten, Steuererklärungen und
Vertretungslistenabfragen abzufragen.

Sie sollten hier allerdings **keinen** im Kanzlei-Informations-System
gespeicherten **Mitarbeiter-Zugang** eintragen, sondern einen allgemeinen
Zugang den kein Mitarbeiter verwendet. Dies hat den Hintergrund, dass
somit differenziert werden kann, welche Abfragen durch das KIS
automatisch durchgeführt wurden und welche vom jeweiligen Mitarbeiter.

![autom Steuerkontoabfrage](<img/image127.png/>)

Im Bereich *Zuordnung* wählen Sie den Eintrag *Steuerkonto-, Erklärungen- und Vertretungslistenabfragen* an. Dieser Benutzer kann durch Anwahl des
Felds *Aktiv* deaktiviert werden. Daneben wird im Feld *Aktuellster DataBox-Eingang* das Datum des letzten persönlichen Eingangs angezeigt.

!!! info "Hinweis"
    Durch den Button **Im FinanzOnline anmelden** können Sie sich mit dem Benutzer in FinanzOnline anmelden. Das ist unter anderem sehr praktisch, weil mit diesem Benutzer ausschließlich im Hintergrund abgerufen wird und eine Anmeldung grundsätzlich nicht nötig ist.

Die Abfrage der Steuerkonten und der Erklärungen kann für einzelne
Klienten in den Finanzamt-Stammdaten im RZL-Board deaktiviert werden.
Damit Steuererklärungen und Steuerkonto eines Klienten grundsätzlich
abgefragt werden können, muss für den Klienten innerhalb von
FinanzOnline Akteneinsicht gemäß § 90a BAO aktiviert sein.

## FinanzOnline Bereich Zustellung

Innerhalb von FinanzOnline gibt es im Bereich *Zustellung* das Feld
*Zustellung*, welches zusätzliche Informationen in die DataBox der
Kanzlei bereitstellt. Die bereits bestehenden Einstellungen im Bereich
der Zustellung können unverändert beibehalten werden.

![FinOn Zustellung](<img/image128.png>)


## Verständigung bei der Erstellung von Veranlagungsbescheiden

Wenn Sie dieses Feld aktivieren, erhalten Sie eine Verständigung wenn
für Ihre Klienten Veranlagungsbescheide erstellt werden. Diese
Verständigung erhalten Sie unabhängig von der tatsächlichen
Bescheidzustellung (z.B.: der Bescheid wird dem Klienten mit der Post
zugeschickt).

Zusätzlich zum Eintrag der Verständigung in die Databox werden
Bescheidinformationen beim Aufruf der **Erklärungen** im
Kanzlei-Informations-System dargestellt. Sie erhalten für Ihre
Veranlagungsbescheide das Vorsoll, den Spruchbetrag und die Gutschrift
oder Nachforderung angezeigt. Mit Hilfe dieser Informationen findet eine Bescheidvorprüfung statt.

!!! warning "Hinweis"
    Wenn Sie die automatische Bescheidvorprüfung verwenden wollen muss
    dieses Feld aktiviert werden.

## Kontoinformation bei der Erstellung einer Buchungsmitteilung

Wenn von der Finanzverwaltung eine Buchungsmitteilung erstellt wird,
können Sie sich diese Buchungsmitteilung durch Anwahl dieses Feldes in
die DataBox zustellen lassen. Immer wenn eine Buchungsmitteilung in die
DataBox geladen wird, wird gleichzeitig das Steuerkonto des Klienten
aktualisiert.

## Anlage des Zugangs im Detail

Der Zugang für die Steuerkonto-, Erklärungen und Vertretungslistenabfrage
sollte nur die notwendigen Rechte besitzen. Sie sollten keinen
Supervisor-Zugang verwenden. Bei der Anlage dieses Benutzers sollten nur
nachfolgende Felder aktiviert werden. Dieser Zugang muss alle Klienten
einsehen können. D.h. es darf keine Beschränkungen durch eine ev.
Teamverwaltung geben.

![Benutzerdaten - Übersicht](<img/image129.png>)

![Benutzerkennung](<img/image130.png>)

In den Bereichen *Abfragen, Databox* und *Admin* müssen nachfolgende
Aktivierungen vorgenommen werden.

![Benutzerzugang Abfragen](<img/image131.png>)

![Benutzerzugang - Nachrichten](<img/image132.png>)

![Benutzerzugang](<img/Steuerkonto Admin Bereich FinOn.png>)

## Mitarbeiter FinanzOnline

FinanzOnline-Zugänge können mit der Zuordnung **Mitarbeiter** oder **Mitarbeiter – Login mit Benutzername** gespeichert werden.

![Mitarbeiterzugang](<img/image134.png>)

Nach Eintragung der Zugangskennungen ist im Bereich *Zuordnung* der
Eintrag *Mitarbeiter* bzw. *Mitarbeiter – Login mit Benutzername*
auszuwählen. Im Bereich *Mitarbeiter* wählen Sie den entsprechenden
Mitarbeiter aus. Aktivieren Sie den Mitarbeiterzugang indem Sie das
Hakerl bei *Aktiv* setzen, um diesen wie vorgesehen verwenden zu
können.

Sie können entweder mit Klick auf eine Steuernummer testen, ob der Zugang korrekt angelegt wurde oder Sie verwenden den Button *In FinanzOnline anmelden* im angelegten Zugang. 

Wenn Sie das Hakerl im Feld *Persönliche Databox abrufen* setzen, dann
können Einträge in der persönlichen DataBox im
Kanzlei-Informations-System abgerufen werden. Das Feld *Letzter
DataBox-Eingang* zeigt Ihnen den aktuellsten Eingang an.

Für persönliche angeforderte Bescheide welche älter als 2 Monate sind, werden aufgrund der Aufgabenvorlagen innerhalb der
FinanzOnline-Zuweisungen keine Aufgaben mehr generiert. Im Programmteil
*Extras / Einstellungen* können Sie im Registerblatt *FinanzOnline*
die Aufgabenerstellung für persönlich angeforderte Bescheide
deaktivieren.

Wenn mehrere Vollmachten (Teilnehmer-IDs) vorhanden sind, muss pro
Mitarbeiter für jede Vollmacht ein Zugang angelegt werden.

## Automatischer Einstieg in FinanzOnline

Im Stammdatenbereich des Kanzlei-Informations-Systems erfolgt der
Einstieg ins FinanzOnline durch Anwahl der Steuernummer. Die
Steuernummer kann innerhalb von FinanzOnline durch Anwahl der
Tastenkombination STRG + V eingefügt werden.

![Direkteinstieg FinOn Steuernr](<img/image135.png>)

Wenn für den Mitarbeiter ein Zugang mit Mitarbeiterzuordnung angelegt
ist, erfolgt der Einstieg ins FinanzOnline direkt ohne die Eintragung
der Zugangskennungen. Gibt es für den Mitarbeiter keinen
Mitarbeiterzugang – kann dieser die Steuernummer trotzdem anwählen –
muss aber die Zugangskennungen eintippen.

!!! warning "Hinweis"
    Vergessen Sie nicht das Hakerl bei *Aktiv* zu setzten. Nur wenn der
    Zugang auch als Aktiv gekennzeichnet wurde, können Sie den automatischen
    Login in FinanzOnline nutzen.

## Mitarbeiter USP

!!! warning "Hinweis"
    Da die Anmeldung im USP mit den FinanzOnline Zugangsdaten bald nicht mehr vom USP unterstützt wird, gibt es inzwischen die Möglichkeit die USP-Kennung im RZL einzutragen und sich damit anzumelden.

Dafür wählen Sie die Zuordnung *Mitarbeiter USP* und tragen die USP Kennung ein.
Nach Eintragung der USP Kennung können Sie mithilfe der Schaltfläche  **Im USP anmelden** kontrollieren, ob der Zugang korrekt eingetragen wurde.

![Mitarbeiter USP](<img/Mitarbeiter USP.png>)

Auch diesen Zugang müssen Sie auf **Aktiv** setzen, damit der automatische Login funktioniert.

## Grundeinstellungen für die FinanzOnline-Abfragen

Die Grundeinstellungen für die Abfragen über FinanzOnline finden Sie
im Programmteil *Extras / Einstellungen* im Registerblatt
*FinanzOnline*.

![Allgemeine FinOn Einstellungen](<img/image136.png>)

### Behördliche DataBox

In diesem Feld tragen Sie ein in welchen Intervallen die behördliche
DataBox abgefragt werden soll.

### Persönliche Databox

Hier tragen Sie das Intervall ein, indem die persönliche DataBox
automatisch abgefragt werden soll. Für Klienten wo keine
Zustellvollmacht auf Papier oder in die DataBox vorliegt, können die
Bescheide und Ergänzungsersuchen automatisch nach Eingang einer
Bescheidinformation (persönlich) abgefragt werden. Diese Einstellung
kann über die Schaltfläche *Konfigurieren* pro Klient vorgenommen
werden.

In der folgenden Liste können Sie die Klienten auswählen, wo keine
Zustellvollmacht vorliegt, um zu garantieren, dass auch bei diesen
Klienten die Bescheide und Ergänzungsersuchen automatisch nach Eingang
einer Bescheidinformation (persönlich) abgefragt werden.

![Klientenauswahl Abruf Veranlagungsbescheide](<img/image137.png>)

Für Bescheide die persönlich heruntergeladen werden, werden durch Anwahl
des Felds *Aufgaben für persönlich angeforderte Bescheide erstellen,
welche weniger als zwei Monate alt sind* Aufgaben erstellt, wenn die
Bescheide weniger als 2 Monate alt sind. Wird dieses Feld nicht
aktiviert, werden für persönliche heruntergeladene Bescheide keine
Aufgaben erstellt.

### Vertretungsliste

Die Vertretungsliste kann täglich oder wöchentlich angefordert werden.

### Quotenerfüllung und Erklärungen

Die Quotenerfüllungen und Erklärungen werden täglich einmal zu der von
Ihnen festgelegten Uhrzeit aktualisiert.

### Steuerkonten

Damit Buchungsmitteilungen in die DataBox geladen werden, müssen Sie
innerhalb von FinanzOnline die entsprechenden Einstellungen vornehmen.
Nach dem Eingang einer Buchungsmitteilung erfolgt die automatische
Aktualisierung der Steuerkonten der Klienten.

Die Steuerkonten werden immer aktualisiert, wenn Sie in den
Klientendaten im Bereich FinanzOnline den Eintrag *Steuerkonto*
anklicken oder in den Kanzleidaten ebenfalls im Bereich FinanzOnline die
Zeile des Klienten doppelt anklicken.

### Dokumente

Damit die von FinanzOnline übermittelten Dokumente neben den
Databoxlisten auch in den Dokumentenlisten im KIS angezeigt werden,
müssen Sie die Option *FinanzOnline-Dokumente in den Dokumentenansichten
anzeigen* aktivieren.