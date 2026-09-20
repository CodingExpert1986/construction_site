$s = Get-Content -Raw 'c:\Users\USER\Documents\Construction\styles.css'
$chars = $s.ToCharArray()
$o = ($chars | Where-Object { $_ -ceq '{' }).Count
$c = ($chars | Where-Object { $_ -ceq '}' }).Count
Write-Output "open braces: $o"
Write-Output "close braces: $c"
if ($o -eq $c) { Write-Output "BALANCED" } else { Write-Output "MISMATCH" }
