<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
// use App\Models\Sanctum\PersonalAccessToken;
use Laravel\Sanctum\Sanctum;
 

use Laravel\Sanctum\PersonalAccessToken as SanctumPersonalAccessToken;
 
class PersonalAccessToken extends SanctumPersonalAccessToken
{
    // ...
}

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Sanctum::usePersonalAccessTokenModel(PersonalAccessToken::class);
    }
}
