# Unterschiede zwischen der RZL Komplettversion und dem RZL SQL-Server Setup

## RZL Komplettversion

Die **RZL Komplettversion** stellt das vollständige Installationspaket für die RZL Programme dar. ES eignet sich für die Installation auf Einzelarbeitsplätzen oder Servern und beinhaltet alle verfügbaren Programme und Komponenten, um die RZL Programme auszuführen.

- Sie verwenden dieses Paket für Neuinstallationen.
- Sie finden die Komplettversion im Anwenderbereich der RZL Homepage unter „RZL Komplettversion“.
- Bei Einzelplatzinstallationen werden sämtliche Programme und – falls erforderlich – die Datenbank lokal installiert.
- Für Programme wie das Kanzlei-Informations-System, das RZL Board oder das Firmen-Board (Belege, Fibu Next) wird bei Bedarf automatisch eine SQL-Datenbank mitinstalliert.
- Die Installation erfolgt lokal über die „RZL Setup.exe“, in der Sie die gewünschten Programme und Module auswählen können.

## RZL SQL-Server Setup

Das **RZL SQL-Server Setup** dient ausschließlich der Installation und Konfiguration einer Microsoft SQL-Server Instanz (in der Regel die kostenfreie Express Edition) für datenbankbasierte RZL Programme im Netzwerk.

- Dieses Setup richtet sich hauptsächlich an Administratoren.
- Sie benötigen dieses Setup, wenn Sie eine neue SQL-Instanz sammt Datenbank für RZL Programme erstellen möchten (z. B. bei Server- oder Netzwerkinstallationen).
- Das Setup nimmt automatisch wichtige SQL-spezifische Einstellungen vor, wie die Aktivierung von TCP/IP, das Erstellen von Firewallregeln und die Konfiguration des SQL-Server Browsers.
- Sie können das Setup eigenständig aus dem Anwenderbereich herunterladen.
- Es enthält keine RZL Programme, sondern ist ausschließlich auf die Installation und Konfiguration des SQL-Servers spezialisiert.

---

## Zusammenfassung

- Die **RZL Komplettversion** ist für die vollständige Installation der RZL Software inklusive aller benötigten Komponenten (Programme und ggf. Datenbank) vorgesehen.
- Das **RZL SQL-Server Setup** ist speziell für die Installation und Einrichtung des SQL-Servers, der von den RZL-Programmen benötigt wird. Und dient als Vorbereitung für die darauffolgende Installation von Programmen wie KIS und Board mittels RZL Komplettversion.

Falls Sie unsicher sind, welches Setup für Ihren Anwendungsfall geeignet ist, wenden Sie sich bitte an unseren Support. Wir beraten Sie gerne individuell.
