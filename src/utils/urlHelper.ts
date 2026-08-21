/**
 * Helper to ensure SharePoint / OneDrive links always open in the browser web viewer
 * (Word Online, Excel Online, PowerPoint Online, PDF Viewer) instead of triggering a download.
 */
export function ensureWebViewerUrl(url: string | undefined): string | undefined {
  if (!url) return undefined;
  let cleanUrl = url.trim();

  // If it's a SharePoint or OneDrive document link
  if (cleanUrl.includes('sharepoint.com') || cleanUrl.includes('onedrive.live.com')) {
    // If it already has web=1, return it
    if (cleanUrl.includes('web=1')) {
      return cleanUrl;
    }
    
    // Replace any web=0 or download=1 if present
    cleanUrl = cleanUrl.replace(/([?&])web=0/g, '$1web=1').replace(/([?&])download=1/g, '$1web=1');

    if (!cleanUrl.includes('web=1')) {
      if (cleanUrl.includes('?')) {
        cleanUrl = `${cleanUrl}&web=1`;
      } else {
        cleanUrl = `${cleanUrl}?web=1`;
      }
    }
    return cleanUrl;
  }

  return cleanUrl;
}
