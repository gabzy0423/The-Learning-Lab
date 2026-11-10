param(
  [string]$Source = "$PSScriptRoot\..\public\assets\logo\learning_lab_logo.png",
  [string]$Destination = "$PSScriptRoot\..\public\assets\logo\learning-lab-logo-transparent.png"
)

Add-Type -AssemblyName System.Drawing
$sourceImage = [System.Drawing.Bitmap]::FromFile($Source)
$sourceImage.MakeTransparent($sourceImage.GetPixel(0, 0))
$crop = New-Object System.Drawing.Rectangle(230, 100, 1200, 430)
$outputImage = $sourceImage.Clone($crop, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$outputImage.Save($Destination, [System.Drawing.Imaging.ImageFormat]::Png)
$outputImage.Dispose()
$sourceImage.Dispose()

$result = [System.Drawing.Image]::FromFile($Destination)
if ($result.Width -ne 1200 -or $result.Height -ne 430) {
  $result.Dispose()
  throw "Unexpected logo dimensions."
}
if ($result.GetPixel(600, 20).A -ne 0) {
  $result.Dispose()
  throw "Logo background was not removed."
}
$result.Dispose()
