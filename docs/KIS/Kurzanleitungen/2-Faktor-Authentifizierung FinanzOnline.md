Ab Oktober 2025 ist die 2FA verpflichtend zu verwenden. Damit die automatischen Abrufe im Programm weiterhin funktionieren, muss bis September 2025 die 2FA für den Zugang für *Steuerkonto-, Erklärungen- und Vertretungslistenabfragen* aktiviert werden.

Für folgende Zugangstypen in RZL Board/KIS kann in FinanzOnline die 2-Faktor-Authentifizierung (2FA) aktiviert werden:

* Mitarbeiter
* Mitarbeiter - Login mit Benutzername
* Steuerkonto-, Erklärungen- und Vertretungslistenabfragen

Für die Aktivierung melden Sie sich mit dem jeweiligen Zugang, für welchen die 2FA aktiviert werden soll, auf der FinanzOnline-Webseite an.

!!! warning "Hinweis"
    Die 2FA ist **GETRENNT** pro Zugang zu hinterlegen. Der im FinanzOnline angezeigte 2FA-Schlüssel darf also nur bei dem jeweilig betroffenen Zugang hinterlegt werden. Der Zugang für Steuerkonto-, Erklärungen- und Vertretungslistenabfragen sollte **KEIN** Mitarbeiter-Zugang sein, sondern ein separater Zugang, eigens angelegt für den Abruf von Steuerkonto-, Erklärungen- und Vertretungslistenabfragen! Demnach ist auch das Anmelden mit den Zugangsdaten dieses Zugangs nötig, um die 2FA zu aktivieren. Dies ist nur außerhalb vom KIS möglich, über das KIS kann sich also nicht mit dem Steuerkonto-Zugang angemeldet werden.

Erscheint der Hinweis zur 2FA Registrierung sofort nach dem Login, können Sie auf *Registrierung starten* klicken.

![2FA Registrierung starten nach Anmeldung](<img/2FA Registrierung.png>)

Die Registrierung können Sie im FinanzOnline auch unter *Benutzermenü / 2-Faktor-Authentifizierung* starten.

![2FA Registrierung Benutzermenü](<img/2FA Registrierung Benutzermenü.png>)

!!! warning "Hinweis"
    Für die Einrichtung der 2FA für den automatischen Login ist **keine** zusätzliche App notwendig. Das KIS ist der 2. Faktor und generiert - wie auch eine App - einen Code, der automatisch beim Klick auf eine Steuernummer ausgefüllt wird. Der automatische Login bleibt also nach Einrichtung wie gewohnt.

Folgende Seite öffnet sich:

![Gerät hinzufügen](<img/Gerät hinzufügen.png>)

!!! warning "Hinweis"
    Den QR-Code können Sie für die Einrichtung des 2. Faktors nicht verwenden. Für das KIS muss der **Einrichtungsschlüssel** verwendet werden.

Kopieren Sie den Einrichtungsschlüssel aus Schritt 1 und fügen Sie diesen im RZL Board/KIS beim jeweiligen FinanzOnline-Zugang im Feld *2FA-Schlüssel* ein. 

!!! warning "Hinweis"
    Drücken Sie aber noch nicht die *Speichern* Schaltfläche im Board/KIS!
    Speichern Sie den Zugang erst, wenn die Registrierung vollständig abgeschlossen ist! 

![2FA Schlüssel KIS](<img/FinOnZugang KIS.png>)

Nach dem Einfügen des Schlüssels erscheint ein sechsstelliger 2FA-Code. Dieser 2FA-Code muss anschließend in Schritt 2 eingefügt werden.

!!! Info "Tipp"
    Den 2FA-Code können Sie mit einem einfachen Klick auf die linke Maustaste kopieren.

![2FA-Code in Zwischenablage](<img/2FA Info wg. Code.png>)

Vergeben Sie einen beliebigen Namen unter Schritt 3. Damit die 2FA seitens RZL funktioniert ist der hier eingetragene Name nicht von Bedeutung.
Klicken Sie auf *Gerät speichern*.

Es erscheint folgende Seite:

![Wiederherstellungscode](<img/Wiederherstellungscode.png>)

Klicken Sie *PDF mit Wiederherstellungscode herunterladen* und bewahren Sie das Dokument wie beschrieben auf. 
Öffnen Sie das Dokument, kopieren Sie den Bestätigungscode aus dem Dokument und fügen Sie diesen im Schritt 2 auf der FinanzOnline-Webseite wieder ein. Klicken Sie auf *Weiter*.

Auf der nachfolgenden Seite kann optional eine E-Mail-Adresse angegeben werden. Sie können den Schritt auch überspringen.

![E-Mail angeben](<img/E-Mail.png>)

Klicken Sie auf *Weiter* bzw. *überspringen*.

![2FA erfolgreich Seite](<img/2FA erfolgreich.png>)

Die Aktivierung der 2FA ist somit abgeschlossen.

Anschließend muss im RZL KIS/BOARD auf Speichern geklickt werden. Dabei wird die Anmeldung an FinanzOnline mittels 2FA gleich überprüft.

!!! info "Tipp"
    Soll eine Anmeldung in FinanzOnline auch über das Mobiltelefon oder andere Geräte - auf denen kein KIS installiert ist - erfolgen, können diese zusätzlichen Geräte in FinanzOnline im persönlichen Menü hinzugefügt werden.